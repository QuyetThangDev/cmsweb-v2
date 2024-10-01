import {
  MappingProfile,
  Mapper,
  createMap,
  extend,
  forMember,
  mapFrom,
  mapWith,
} from "@automapper/core";
import { 
  ProductResponseDto,
  ProductWarehouseResponseDto,
  UnitResponseDto
} from "@dto/response";
import {
  CreateProductRequestDto,
} from "@dto/request";
import { Product, ProductWarehouse, Unit } from "@entities";
import { baseMapper } from "./base.mapper";

export const productMapper: MappingProfile = (mapper: Mapper) => {
  // Map request object to entity
  createMap(mapper, CreateProductRequestDto, Product);
  
  //Map entity to response object
  createMap(
    mapper,
    Product,
    ProductResponseDto,
    forMember(
      (destination) => destination.unit,
      mapWith(
        UnitResponseDto,
        Unit,
        (source) => source.unit
      )
    ),
    forMember(
      (destination) => destination.productWarehouses,
      mapWith(
        ProductWarehouseResponseDto,
        ProductWarehouse,
        (source) => source.productWarehouses
      )
    ),
    extend(baseMapper(mapper))
  );
};
