import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokenRepository from '../repositories/IUserTokenRepository';
import IMailProvider from '../../../shared/container/providers/MailProvider/models/IMailProvider';

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

    this.mailProvider.sendMail(
      email,
      `pedido de recuperacao de senha recebido: ${token}`,
    );
  }
}

export default SendForgotPasswordEmailService;
