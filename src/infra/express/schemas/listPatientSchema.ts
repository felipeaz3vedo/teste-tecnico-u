import { z } from 'zod';

export const listPatientSchema = z
  .object({
    ala: z
      .enum(['A', 'B'], {
        errorMap: (issue, ctx) => ({
          message: "Invalid value. Expect 'A' or 'B'"
        })
      })
      .optional()
  })
  .strict();
