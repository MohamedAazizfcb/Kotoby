import { IRouteModel } from "./app-route.interface";

export class RoutesModel // Singleton
{
    private static instance: RoutesModel;

    private constructor() {}

    public static getInstance(): RoutesModel {
      if (!RoutesModel.instance) {
        RoutesModel.instance = new RoutesModel();
      }
      return RoutesModel.instance;
    }

    private auth: IRouteModel = {
        route: 'auth',
        label_en: 'auth', 
        label_ar: 'المصادقة'
    };

    login: IRouteModel = {
        route: this.auth.route + '/login',
        label_en: 'login', 
        label_ar: 'تسجيل الدخول'
    };

    register: IRouteModel = {
        route: this.auth.route + '/register',
        label_en: 'register', 
        label_ar: 'تسجيل مستخدم جديد'
    };
}