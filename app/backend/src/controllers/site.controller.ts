import { TApiResponse } from "@types";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { siteService } from "@services";
import { SiteResponseDto } from "@dto/response";
import { TCreateSiteRequestDto } from "@types";

class SiteController {
   /**
   * @swagger
   * components:
   *   schemas:
   *     CreateSiteRequestDto:
   *       type: object
   *       required:
   *         - name
   *         - address
   *         - manager
   *       properties:
   *         name:
   *           type: string
   *           description: sitename
   *         address:
   *           type: string
   *           description: siteaddress
   *         manager:
   *           type: string
   *           description: managerSlug
   *       example:
   *         name: FirstSite
   *         address: Linh Trung, Thủ Đức
   *         manager: 3Co-M1ZL4
   */

  /**
   * @swagger
   * tags:
   *   - name: Site
   *     description: The site managing API
   */

  /**
   * @swagger
   * /sites:
   *   post:
   *     summary: Create new site
   *     tags: [Site]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateSiteRequestDto'
   *     responses:
   *       200:
   *         description: New site created successfully.
   *         content:
   *           application/json:
   *             schema:
   *       500:
   *         description: Server error
   *
   */

  public async createSite(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const requestData = req.body as TCreateSiteRequestDto;
      const siteData = await siteService.createSite(requestData);

      const response: TApiResponse<SiteResponseDto> = {
        code: StatusCodes.OK,
        error: false,
        message: "Create site successfully",
        method: req.method,
        path: req.originalUrl,
        result: siteData,
      };
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  /**
   * @swagger
   * /sites:
   *   get:
   *     summary: Get all sites
   *     tags: [Site]
   *     responses:
   *       200:
   *         description: Get all sites successfully.
   *       500:
   *         description: Server error
   */

  public async getAllSites(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const sitesData = await siteService.getAllSites();

      const response: TApiResponse<SiteResponseDto[]> = {
        code: StatusCodes.OK,
        error: false,
        message: "Get list sites successfully",
        method: req.method,
        path: req.originalUrl,
        result: sitesData,
      };
      res.status(StatusCodes.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
}

export default new SiteController();