import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { GetUsers } from "./app.actions";
import { ApiService } from "../services/api.service";
import { tap } from "rxjs/operators";
import { IUser } from "../interfaces/user.interface";

export interface AppStateModel {
    name: string;
    users: IUser[]
}

@State<AppStateModel>({ name: 'app' })
@Injectable()
export class AppState {
    constructor(private apiService: ApiService) { }

    @Selector()
    static getUserList(state: AppStateModel): IUser[] {
        return state.users;
    }

    @Action(GetUsers)
    getUsers({ patchState }: StateContext<AppStateModel>, action: GetUsers) {
        return this.apiService.getTestUsers().pipe(tap((res: any) => {
            if (res.data) {
                patchState({ users: res.data })
            }
        }))
    }
}