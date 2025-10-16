import { z } from "zod";
import { esquemaCadastroEnderecoEspecilista } from "../esquemas/esquemaEspecialista";

export type FormCadastroEnderecoEspecialista = z.infer<
  typeof esquemaCadastroEnderecoEspecilista
>;

export type EnderecoProps = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};
