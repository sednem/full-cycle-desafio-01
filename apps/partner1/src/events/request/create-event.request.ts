import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  Length,
  Min,
} from 'class-validator';

export class CreateEventRequest {
  @IsNotEmpty()
  @Length(1, 255)
  name: string;
  @IsNotEmpty()
  @Length(1, 255)
  description: string;
  @IsNotEmpty()
  @IsDateString()
  date: string;
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;
}
