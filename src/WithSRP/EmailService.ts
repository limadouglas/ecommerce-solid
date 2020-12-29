export default class EmailService {
  private to: string;
  private from: string;
  private subject: string;
  private message: string;

  constructor(
    to: string = 'contato@mail.com',
    from: string = '',
    subject: string = '',
    message: string = ''
  ){
    this.to = to;
    this.from = from;
    this.subject = subject;
    this.message = message;
  }

  public static sendMail(){
    return 'email sent!'
  }
} 