import { JWT_SECRET } from "../config";
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({message: "Token not provided"})
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded.userId) {
        return res.status(403).json({message: "Invalid token"});  
    }

    req.userId = decoded.userId;
    next();

  } catch (err) {
    return res.status(403).json({message: "Invalid or expired token"});
  }
};

export default authMiddleware;
