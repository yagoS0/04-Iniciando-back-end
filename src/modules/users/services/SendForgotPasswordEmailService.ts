import { injectable, inject } from 'tsyringe';
import path from 'path';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokenRepository from '../repositories/IUserTokenRepository';
import { IMailProvider } from '../../../shared/container/providers/MailProvider/models/IMailProvider';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepositroy: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('UserTokenRepository')
    private userTokenRepository: IUserTokenRepository,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const user = await this.usersRepositroy.findByEmail(email);

    if (!user) {
      throw new AppError('user does not exists');
    }

    const { token } = await this.userTokenRepository.generate(user.id);

    const fogotPasswordTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'forgot_password.hbs',
    );

    await this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: '[Gobarber] Recuperacão de senha',
      templateData: {
        file: fogotPasswordTemplate,
        variables: {
          name: user.name,
          link: `http://localhost:3000/reset_password?token=${token}`,
        },
      },
    });
  }
}

export default SendForgotPasswordEmailService;
