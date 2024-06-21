import { TicketKind } from '@prisma/client';
import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class ReserveSpotRequest {
  @IsNotEmpty()
  @IsArray()
  // "each" tells class-validator to run the validation on each item of the array
  @IsString({ each: true })
  @ArrayMinSize(1)
  spots: string[]; //['A1', 'A2']
  @IsNotEmpty()
  @IsEnum(TicketKind)
  ticket_kind: TicketKind;
  email: string;
}
