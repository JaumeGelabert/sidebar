import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import {
  BlendIcon,
  BoxIcon,
  CheckIcon,
  ChevronDownIcon,
  EllipsisIcon,
  FocusIcon,
  HomeIcon,
  InboxIcon,
  Layers2Icon,
  StarIcon,
  UsersIcon
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-fit focus:outline-none">
            <div className="group/dropdown flex flex-row justify-start items-center gap-1 w-fit hover:bg-zinc-100 p-1 rounded-md cursor-pointer transition-all duration-300">
              <div className="bg-orange-500 w-6 h-6 rounded-md flex flex-col justify-center items-center">
                <BlendIcon
                  className="w-4 h-4 text-white"
                  strokeWidth={1.5}
                  fill="currentColor"
                />
              </div>
              <p className="text-sm font-semibold text-zinc-800">Uprio</p>
              <ChevronDownIcon
                className="w-3 h-3 text-zinc-500 group-hover/dropdown:text-zinc-800 transition-colors duration-300"
                strokeWidth={2.5}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[14rem] mx-4">
            <DropdownMenuItem className="flex flex-row justify-between items-center cursor-pointer">
              Settings
              <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center rounded border px-1.5 font-mono text-xs font-medium opacity-100 select-none">
                <span className="text-[10px] mr-1">⌥</span>1
              </kbd>
            </DropdownMenuItem>
            <DropdownMenuItem>Invite and manage members</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Switch workspace</DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="mx-2 w-[14rem]">
                <DropdownMenuLabel className="text-xs text-zinc-500">
                  Organizations
                </DropdownMenuLabel>
                <DropdownMenuItem className="flex flex-row w-full justify-between items-center">
                  <span className="flex flex-row justify-start items-center gap-2">
                    <div className="h-4 w-4 bg-yellow-500 rounded" />
                    IT
                  </span>
                  <span className="flex flex-row justify-end items-center gap-2">
                    <CheckIcon className="w-3 h-3 text-zinc-700" />
                    <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center rounded border px-1.5 font-mono text-xs font-medium opacity-100 select-none">
                      1
                    </kbd>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-row w-full justify-between items-center">
                  <span className="flex flex-row justify-start items-center gap-2">
                    <div className="h-4 w-4 bg-purple-500 rounded" />
                    Sales
                  </span>
                  <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center rounded border px-1.5 font-mono text-xs font-medium opacity-100 select-none">
                    2
                  </kbd>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-row w-full justify-between items-center">
                  Create or join an organization
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuItem className="flex flex-row justify-between items-center cursor-pointer">
              Logout{" "}
              <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center rounded border px-1.5 font-mono text-xs font-medium opacity-100 select-none">
                <span className="text-[10px] mr-1">⌥</span>Q
              </kbd>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="pt-0">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-zinc-700 hover:text-black transition-colors cursor-pointer">
                  <InboxIcon className="w-4 h-4" />
                  Inbox
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-zinc-700 hover:text-black transition-colors cursor-pointer">
                  <FocusIcon className="w-4 h-4" />
                  Tasks
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Collapsible className="group/workspace">
          <SidebarGroup className="pb-0">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Workspace
                <ChevronDownIcon className="ml-auto transition-transform group-data-[state=open]/workspace:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="mb-4">
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-700 hover:text-black transition-colors cursor-pointer">
                      <BoxIcon className="w-4 h-4" />
                      Projects
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-700 hover:text-black transition-colors cursor-pointer">
                      <Layers2Icon className="w-4 h-4" />
                      Views
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-700 hover:text-black transition-colors cursor-pointer">
                      <EllipsisIcon className="w-4 h-4" />
                      More
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible className="group/favorites">
          <SidebarGroup className="py-0">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="">
                Favorites
                <ChevronDownIcon className="ml-auto transition-transform group-data-[state=open]/favorites:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="mb-4">
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-700 hover:text-black transition-colors cursor-pointer">
                      <StarIcon className="w-4 h-4" />
                      Projects
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-700 hover:text-black transition-colors cursor-pointer">
                      <Layers2Icon className="w-4 h-4" />
                      Views
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-700 hover:text-black transition-colors cursor-pointer">
                      <EllipsisIcon className="w-4 h-4" />
                      More
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible className="group/teams">
          <SidebarGroup className="pt-0">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="">
                Teams
                <ChevronDownIcon className="ml-auto transition-transform group-data-[state=open]/teams:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="mb-4">
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-700 hover:text-black transition-colors cursor-pointer">
                      <UsersIcon className="w-4 h-4" />
                      Team 1
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-700 hover:text-black transition-colors cursor-pointer">
                      <Layers2Icon className="w-4 h-4" />
                      Views
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-zinc-700 hover:text-black transition-colors cursor-pointer">
                      <EllipsisIcon className="w-4 h-4" />
                      More
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
