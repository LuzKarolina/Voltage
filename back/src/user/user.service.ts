import { Inject, Injectable } from '@nestjs/common';
import { IUser } from './user.model';
import { UserDto } from './user.DTO';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel: Model<IUser>){}

     saludo(): string{
        return "Esta es la ruta de estudiante o Usuario"
    }

    async crearUser(User: UserDto){

        const resultado =new this.userModel(User)

        return await resultado.save()
    }
}
function InjectModel(arg0: string): (target: typeof UserService, propertyKey: undefined, parameterIndex: 0) => void {
    throw new Error('Function not implemented.');
}

