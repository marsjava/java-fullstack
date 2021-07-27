import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {HardcodedAuthService} from "./hardcoded-auth.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
  constructor(private hcAuthService: HardcodedAuthService, private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.hcAuthService.isLoggedIn()) {
        return true;
      } else {
        this.route.navigate(['login']);
        return false;
      }
  }
}
