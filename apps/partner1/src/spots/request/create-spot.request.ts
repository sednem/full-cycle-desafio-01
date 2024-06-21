import { IsNotEmpty, Length } from 'class-validator';

export class CreateSpotRequest {
  @IsNotEmpty()
  @Length(1, 255)
  name: string;
}
