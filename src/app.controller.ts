import { Controller, Get, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { AppService } from './app.service';
import { UserEntity, UserDto } from './entities/user.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AppController {
  constructor(
    private readonly appService: AppService
  ) { }


  /**
   * Тут получили полный объект, т.к. возвращали UserEntity
   * Response
   * {
      "id": 1,
      "email": "email",
      "passwordHash": "123edawesdfvwe"
     }
   */
  @Get('/getUser')
  getUser(): Promise<UserEntity> {
    return this.appService.getUser();
  }


  /**
   * Response
   * Тут получили полный модифицированный объект, т.к. возвращали UserEntity
   *
   *  {
        "id": 1,
        "email": "email",
        "comments": [
            {
              "text": "123123             "
            },
            {
              "text": "ewdfsc             "
            }
        ]
      }
   */
 
  @Get('/getUserComments')
  async getUserComments(): Promise<UserDto> {
    const ko = await  this.appService.getUserComments() ;
    return new UserDto(ko)
  }
}
