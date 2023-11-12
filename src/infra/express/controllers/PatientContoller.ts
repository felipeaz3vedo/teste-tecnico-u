import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpDelete,
  httpGet,
  httpPatch,
  httpPost
} from 'inversify-express-utils';

import { errorHandler } from '../../errors/errorHandler';

import { createPatientSchema } from '../schemas/createPatientSchema';
import { updatePatientSchema } from '../schemas/updatePatientSchema';

import { ListPatientsUseCase } from '../../../app/useCases/ListPatientsUseCase';
import { ShowPatientUseCase } from '../../../app/useCases/ShowPatientUseCase';
import { RegisterPatientUseCase } from '../../../app/useCases/RegisterPatientUseCase';
import { UpdatePatientUseCase } from '../../../app/useCases/UpdatePatientUseCase';
import { RemoveParientUseCase } from '../../../app/useCases/RemoveParientUseCase';
import { listPatientSchema } from '../schemas/listPatientSchema';

type Query = {
  ala: 'A' | 'B';
};

@controller('/patients')
export class PatientController {
  constructor(
    @inject(ListPatientsUseCase)
    private readonly listUseCase: ListPatientsUseCase,
    @inject(ShowPatientUseCase)
    private readonly showUseCase: ShowPatientUseCase,
    @inject(RegisterPatientUseCase)
    private readonly registerUseCase: RegisterPatientUseCase,
    @inject(UpdatePatientUseCase)
    private readonly updateUseCase: UpdatePatientUseCase,
    @inject(RemoveParientUseCase)
    private readonly removeUseCase: RemoveParientUseCase
  ) {}

  @httpGet('')
  async list(req: Request, res: Response): Promise<Response | void> {
    try {
      const query = req.query as Query;

      const { ala } = listPatientSchema.parse(query);

      const patients = await this.listUseCase.execute(ala);

      return res.status(200).json(patients);
    } catch (err) {
      errorHandler(err, res);
    }
  }

  @httpGet('/:id')
  async show(req: Request, res: Response): Promise<Response | void> {
    try {
      const { id } = req.params;

      const patient = await this.showUseCase.execute(Number(id));

      return res.status(200).json(patient);
    } catch (err) {
      errorHandler(err, res);
    }
  }

  @httpPost('')
  async register(req: Request, res: Response): Promise<Response | void> {
    try {
      const patientData = createPatientSchema.parse(req.body);

      const patient = await this.registerUseCase.execute(patientData);

      return res.status(201).json(patient);
    } catch (err) {
      errorHandler(err, res);
    }
  }

  @httpPatch('/:id')
  async update(req: Request, res: Response): Promise<Response | void> {
    try {
      const { id } = req.params;

      const patientData = updatePatientSchema.parse(req.body);

      const patient = await this.updateUseCase.execute(Number(id), patientData);

      return res.status(200).json(patient);
    } catch (err) {
      errorHandler(err, res);
    }
  }

  @httpDelete('/:id')
  async remove(req: Request, res: Response): Promise<Response | void> {
    try {
      const { id } = req.params;

      await this.removeUseCase.execute(Number(id));

      return res.status(204).json();
    } catch (err) {
      errorHandler(err, res);
    }
  }
}
