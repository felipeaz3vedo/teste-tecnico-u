import { z } from 'zod';

export const registerPatientSchema = z
  .object({
    nomeCompleto: z.string().min(3),
    telefone: z
      .string()
      .regex(
        new RegExp(
          /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
        )
      ),
    dataNascimento: z.coerce.date().max(new Date()),
    sexo: z.string().min(3),
    ala: z.enum(['A', 'B']),
    quarto: z.number().gte(1).lte(9)
  })
  .strict();
