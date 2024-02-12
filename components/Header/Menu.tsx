"use client";
import { LogOut, Settings, User, BookText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";
export function Menu({ srcImg }: { srcImg: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage
            className=" cursor-pointer hover:blur-[2px] transition-all"
            src={srcImg}
            alt="avatar Img"
          />
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link className="flex " href={"/profile"}>
            <DropdownMenuItem className="w-full cursor-pointer">
              <User className="mr-2 h-4 w-4" /> Профиль
            </DropdownMenuItem>
          </Link>
          <Link className="flex " href={"/posts"}>
          <DropdownMenuItem className="w-full cursor-pointer">
            <BookText className="mr-2 h-4 w-4" />
            Список постов
          </DropdownMenuItem>
          </Link>
          <Link className="flex " href={"/settings"}>
          <DropdownMenuItem className="w-full cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            Настройки
          </DropdownMenuItem>
          </Link>
          
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Выйти</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
