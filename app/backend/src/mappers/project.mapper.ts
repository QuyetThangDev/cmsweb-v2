import {
  MappingProfile,
  Mapper,
  createMap,
  mapFrom,
  forMember,
  extend,
  typeConverter,
} from "@automapper/core";
import { ProjectResponseDto } from "@dto/response";
import { CreateProjectRequestDto } from "@dto/request";
import { Project } from "@entities";
import moment from "moment";
import { baseMapper } from "./base.mapper";

// Define the mapping profile
export const projectMapper: MappingProfile = (mapper: Mapper) => {
  // Map entity to response object
  createMap(
    mapper,
    Project,
    ProjectResponseDto,
    forMember(
      (destination) => destination.managerFullname,
      mapFrom((source) => source.manager?.fullname)
    ),
    forMember(
      (destination) => destination.managerSlug,
      mapFrom((source) => source.manager?.slug)
    ),
    typeConverter(Date, String, (startDate) => moment(startDate).toString()),
    extend(baseMapper(mapper))
  );

  // Map request object to entity
  createMap(
    mapper,
    CreateProjectRequestDto,
    Project,
    forMember(
      (destination) => destination.startDate,
      mapFrom((source) => moment(source.startDate).toDate())
    )
  );
};
