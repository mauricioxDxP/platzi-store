import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('costumers')
export class CostumersController {
  @Get(':id')
  getCostumer(@Param('id') id: number) {
    return {
      message: `costumer ${id}`,
    };
  }
  @Post(':id')
  createCostumer(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `costumer ${id} created`,
      payload,
    };
  }

  @Put(':id')
  modifyCostumer(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `costumer ${id} modified`,
      payload,
    };
  }
  @Delete(':id')
  deleteCostumer(@Param('id') id: number) {
    return {
      message: `costumer ${id} deleted`,
    };
  }
}
