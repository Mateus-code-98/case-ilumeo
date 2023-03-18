declare namespace Express {
    export interface Request {
        user: {
            id: string;
            type: "root" | "broker" | "responsible" | "customer" | "analyst" | "manager"
            secondary_id: string
        }
        franchise_id: any
        broker_id: any
        analyst_id: any
        manager_id: any
        crms_tokens: {
            super_logica: {
                access_token: any
                app_token: any
                status: any
            }
        }
    }
}