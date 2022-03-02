import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategorynproduct(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return { message: `product ${productId} and ${id}` };
  }
  @Get(':id')
  getCategory(@Param('id') id: number) {
    return {
      message: `category ${id}`,
    };
  }
  @Post(':id')
  createCategory(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `category ${id} created`,
      payload,
    };
  }

  @Put(':id')
  modifyCategory(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `category ${id} modified`,
      payload,
    };
  }
  @Delete(':id')
  deleteCategory(@Param('id') id: number) {
    return {
      message: `category ${id} deleted`,
    };
  }
}
