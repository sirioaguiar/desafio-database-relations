import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';
import FindOrderService from '@modules/orders/services/FindOrderService';

// Response
export default class OrdersController {
  public async show(request: Request, response: Response): Promise<void> {
    // TODO
  }

  public async create(request: Request, response: Response): Promise<void> {
    // TODO
  }
}
