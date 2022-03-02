import { PartialType } from "@nestjs/mapped-types";
import { IsString, IsNotEmpty } from "class-validator";

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly image: string;
}
export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
