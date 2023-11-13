import { z } from 'zod';

export const updatePatientSchema = z
  .object({
    nomeCompleto: z.string().min(3).max(100),
    telefone: z
      .string()
      .regex(
        new RegExp(
          /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/
        ),
        {
          message:
            'Invalid phone number format or invalid phone number. Expect a valid number with (DD) XXXXX-XXXX, (DD) XXXXXXXXX, (DD)XXXXXXXXX,  (DD)XXXXX-XXXX, (DD)XXXXXXXXX,  DD XXXXX-XXXX, DD XXXXXXXXX, DDXXXXX-XXXX or DDXXXXXXXXX format. Local numbers with 8 numbers are also allowed'
        }
      ),
    dataNascimento: z.string().refine(
      (date) => {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;

        return regex.test(date);
      },
      { message: 'Formato inválido, esperado: dd/mm/yyyy' }
    ),
    sexo: z.string().min(3),
    ala: z.enum(['A', 'B']),
    quarto: z.number().gte(1).lte(9)
  })
  .strict()
  .partial();
