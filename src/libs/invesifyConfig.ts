import { Container } from 'inversify';
import { PatientController } from '../infra/express/controllers/PatientContoller';
import { PrismaPatientRepository } from '../app/repositories/prisma/PrismaPatientRepository';
import { ListPatientsUseCase } from '../app/useCases/ListPatientsUseCase';
import { ShowPatientUseCase } from '../app/useCases/ShowPatientUseCase';
import { RegisterPatientUseCase } from '../app/useCases/RegisterPatientUseCase';
import { RemoveParientUseCase } from '../app/useCases/RemoveParientUseCase';
import { UpdatePatientUseCase } from '../app/useCases/UpdatePatientUseCase';

export const container = new Container();

container.bind<PatientController>(PatientController).toSelf();
container.bind<PrismaPatientRepository>(PrismaPatientRepository).toSelf();
container.bind<ListPatientsUseCase>(ListPatientsUseCase).toSelf();
container.bind<ShowPatientUseCase>(ShowPatientUseCase).toSelf();
container.bind<RegisterPatientUseCase>(RegisterPatientUseCase).toSelf();
container.bind<UpdatePatientUseCase>(UpdatePatientUseCase).toSelf();
container.bind<RemoveParientUseCase>(RemoveParientUseCase).toSelf();
