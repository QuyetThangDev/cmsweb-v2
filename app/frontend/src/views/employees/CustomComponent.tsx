import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Button
} from '@/components/ui'
import { ChevronDown } from 'lucide-react'
import { Table } from '@tanstack/react-table'
// import { NavLink } from 'react-router-dom'
import { DialogAddUser } from '@/components/app/dialog'

interface ColumnVisibilityDropdownProps<TData> {
  table: Table<TData>
}

export function CustomComponent<TData>({ table }: ColumnVisibilityDropdownProps<TData>) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto text-normal">
            Chọn cột
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogAddUser />
    </>
  )
}