import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import { uuid } from 'uuidv4';
import { isEqual } from 'date-fns';
import IAppointmentsRepository from '../IAppointmentsRepository';
import ICreateAppointmentsDTO from '../../dtos/ICreateAppointmentsDTO';

export default class AppointmentsRepository implements IAppointmentsRepository {
  private appointements: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = this.appointements.find(appointment =>
      isEqual(appointment.date, date),
    );
    return findAppointment;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentsDTO): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, { id: uuid(), date, provider_id });

    this.appointements.push(appointment);

    return appointment;
  }
}
