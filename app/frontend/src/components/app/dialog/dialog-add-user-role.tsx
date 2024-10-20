import { useTranslation } from 'react-i18next'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui'

import { TCreateUserRoleSchema } from '@/schemas'
import { AddEmployeeRoleForm } from '@/components/app/form'
import { ICreateUserRole, IUserInfo } from '@/types'
import { useCreateUserRole } from '@/hooks'
import { showToast } from '@/utils'

interface DialogAddUserRoleProps {
  user: IUserInfo | null
  open: boolean
  component: React.ReactNode
  onOpenChange: () => void
}

export function DialogAddUserRole({ user, open, component, onOpenChange }: DialogAddUserRoleProps) {
  const { t } = useTranslation('employees')
  const { t: tToast } = useTranslation('toast')
  const { mutate: createUserRole } = useCreateUserRole()

  const handleSubmit = (values: TCreateUserRoleSchema) => {
    const requestData = {
      roleSlug: values.role.value,
      userSlug: values.user.value
    } as ICreateUserRole

    createUserRole(requestData, {
      onSuccess: () => {
        showToast(tToast('toast.addRoleSuccess'))
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{component}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('employees.createUserRole')}</DialogTitle>
          <DialogDescription>{t('employees.createUserRoleDescription')}</DialogDescription>
        </DialogHeader>
        {user && <AddEmployeeRoleForm user={user} onSubmit={handleSubmit} />}
      </DialogContent>
    </Dialog>
  )
}
