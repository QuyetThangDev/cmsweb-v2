import { AutoMap } from "@automapper/classes";
import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { RolePrefix } from "decorator";

export class CreateRoleRequestDto {
  @RolePrefix({ message: "INVALID_ROLE_PREFIX" })
  @Expose()
  @AutoMap()
  nameNormalize?: string;

  @Expose()
  @AutoMap()
  description?: string;

  @Expose()
  @AutoMap()
  nameDisplay?: string;
}

export class UpdateRoleRequestDto {
  @RolePrefix({ message: "INVALID_ROLE_PREFIX" })
  @Expose()
  @AutoMap()
  nameNormalize?: string;

  @Expose()
  @AutoMap()
  nameDisplay?: string;

  @Expose()
  @AutoMap()
  description?: string;
}
