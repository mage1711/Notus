import { prop, getModelForClass,Ref } from '@typegoose/typegoose';
import { User } from './User';
import * as mongoose from 'mongoose';


export class Post {
    @prop()
    public title?: string;

    @prop({ref:()=>User})
    public poster?: Ref<User>;
    
  }
  
  export const PostModel = getModelForClass(Post);
  
