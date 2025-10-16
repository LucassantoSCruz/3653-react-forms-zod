import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024;

export const esquemaCadastroEnderecoEspecilista = z.object({
  endereco: z.object({
    cep: z.string().min(8, "Informe um CEP válido"),
    avatar: z
      .custom<FileList>(
        (val): val is FileList => val instanceof FileList && val.length > 0,
        { message: "Selecione uma imagem antes de continuar" }
      )
      .refine(
        (fileList) =>
          fileList instanceof FileList && fileList[0]?.size <= MAX_FILE_SIZE,
        { message: "A imagem deve ter no máximo 2MB" }
      )
      .transform((lista) => (lista as FileList).item(0)!),
    rua: z.string().min(1, "Informe uma rua válida"),
    numero: z.coerce.number().min(1, "Informe um número válido"),
    bairro: z.string().min(1, "Informe um bairro válido"),
    localidade: z.string().min(1, "Informe uma localidade válida"),
  }),
});
