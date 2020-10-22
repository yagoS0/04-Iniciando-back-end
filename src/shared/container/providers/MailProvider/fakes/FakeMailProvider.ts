import { IMailProvider } from '../models/IMailProvider';

interface IMessage {
  body: string;
  to: string;
}

export default class FakeMailProvider implements IMailProvider {
  private messages: IMessage[] = [];

  public async sendMail(to: string, body: string): Promise<void> {
    this.messages.push({
      to,
      body,
    });
  }
}
