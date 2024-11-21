import { Entity, Column } from 'typeorm';

import BaseEntity from './base-entity';
import { IResource } from './interfaces';

@Entity('resource', { name: 'resource' })
export default class Resource extends BaseEntity implements IResource {
  @Column()
    url: string;

  @Column()
    type: string;
}
