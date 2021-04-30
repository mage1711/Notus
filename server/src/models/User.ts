import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';
export class User {
    @prop()
    public name: string;
  }
  
  export const UserModel = getModelForClass(User);
  
