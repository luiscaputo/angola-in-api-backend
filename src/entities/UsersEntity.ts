import { Replace } from '~/utils/replace';
import { randomUUID } from 'crypto';

interface IUsersEntity {
  name: string;
  createdAt: Date;
}

export default class UsersEntity {
  private _id: string;
  private props: IUsersEntity;
  constructor(props: Replace<IUsersEntity, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }
  public get id(): string {
    return this._id;
  }

  public set name(name: string) {
    this.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
