import { registerEnumType } from '@nestjs/graphql';

export enum CategoryScalarFieldEnum {
    id = "id",
    createAt = "createAt",
    updateAt = "updateAt",
    deleteAt = "deleteAt",
    name = "name",
    description = "description"
}


registerEnumType(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum', description: undefined })
