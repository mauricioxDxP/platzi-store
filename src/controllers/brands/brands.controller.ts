import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get(':id')
  getBrand(@Param('id') id: number) {
    return {
      message: `brand ${id}`,
    };
  }
  @Post(':id')
  createBrand(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `brand ${id} created`,
      payload,
    };
  }

  @Put(':id')
  modifyBrand(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `brand ${id} modified`,
      payload,
    };
  }
  @Delete(':id')
  deleteBrand(@Param('id') id: number) {
    return {
      message: `brand ${id} deleted`,
    };
  }
}
