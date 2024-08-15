import JWt from "jsonwebtoken"
import { createError } from "../utils/error.js"

export const verifyToken = (req, res, next) => {
    const token =req.cokies.access_token;

    if(!token) 
        return next(createError(401, "you are not authenticated"))

    JWt.verify(token, process.env.JWT, (err, user) => {
        if(err) return next(createError(403, "Token is not valid"))
        req.user = user
        next()
    })
}
export const verifyuser = (req, res, next) =>{
    verifyToken(req, res, next, () => {
        if(req.user.id=== req.params.id || req.user.iaAdmin){
            next()
        }
        if(err){
return next(createError(403, "You are not authorized"))
        }  })
} 

export const verifyadmin = (req, res, next) =>{
    verifyToken(req, res, next, () => {
        if(req.user.iaAdmin){
            next()
        }
        if(err){
return next(createError(403, "You are not authorized"))
        }  })
}