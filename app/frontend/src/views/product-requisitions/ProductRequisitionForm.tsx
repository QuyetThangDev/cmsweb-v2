import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'
import { IFinalProductRequisition, IProductRequisitionFormCreate } from '@/types'
import {
  CreateProductRequisitionForm,
  SearchProductForm,
  ConfirmProductForm
} from '@/components/app/form'
import { ProgressBar } from '@/components/app/progress/progress-bar'
import { useMultiStep } from '@/hooks'
import { createProductRequisition } from '@/api/products'
import { showToast } from '@/utils'
import { useRequisitionStore } from '@/stores'

const ProductRequisitionForm: React.FC = () => {
  const { t } = useTranslation('productRequisition')
  const { t: tToast } = useTranslation('toast')
  const { currentStep, handleStepChange } = useMultiStep(1)
  const { setRequisition, clearRequisition, requisition } = useRequisitionStore()

  const mutation = useMutation({
    mutationFn: async (data: IFinalProductRequisition) => {
      return createProductRequisition(data)
    },
    onSuccess: () => {
      showToast(tToast('toast.requestSuccess'))
      clearRequisition()
      handleStepChange(4)
    }
  })

  const handleFormCreateSubmit = (data: IProductRequisitionFormCreate) => {
    const newRequisition: IProductRequisitionFormCreate = {
      ...data
    }
    // updateRequisition(newRequisition)
    setRequisition(newRequisition)
    handleStepChange(2)
  }

  const handleFormSearchSubmit = () => {
    //check if not add any product to requisition
    if (requisition?.requestProducts.length === 0) {
      showToast(tToast('toast.notAddProductToRequisition'))
      return
    }
    handleStepChange(3)
  }

  const handleConfirmRequest = (data: IFinalProductRequisition) => {
    console.log('data', data)
    if (data) {
      mutation.mutate(data)
    }
  }

  const handleBackToCreate = () => {
    handleStepChange(1)
  }

  const handleBackToSearch = () => {
    handleStepChange(2)
  }

  return (
    <div>
      <div className="flex justify-center w-full my-2">
        <div className="w-full md:w-4/5">
          <ProgressBar step={currentStep} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {currentStep === 1 && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between w-full border-b">
              <div className="flex flex-col items-start gap-2 py-2">
                <CardTitle>{t('productRequisition.createProductRequisitions')}</CardTitle>
                <CardDescription>
                  {t('productRequisition.createProductRequisitionsDescription')}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col">
              <CreateProductRequisitionForm onSubmit={handleFormCreateSubmit} />
            </CardContent>
          </Card>
        )}
        {currentStep === 2 && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between w-full border-b">
              <div className="flex flex-col items-start gap-2 py-2">
                <CardTitle>{t('productRequisition.addProductToRequest')}</CardTitle>
                <CardDescription>
                  {t('productRequisition.addProductToRequestDescription')}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col">
              <SearchProductForm onSubmit={handleFormSearchSubmit} onBack={handleBackToCreate} />
            </CardContent>
          </Card>
        )}
        {currentStep === 3 && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between w-full border-b">
              <div className="flex flex-col items-start gap-2 py-2">
                <CardTitle>{t('productRequisition.confirmProductRequisitions')}</CardTitle>
                <CardDescription>
                  {t('productRequisition.confirmProductRequisitionsDescription')}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col">
              <ConfirmProductForm onConfirm={handleConfirmRequest} onBack={handleBackToSearch} />
            </CardContent>
          </Card>
        )}
        {currentStep === 4 && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between w-full border-b">
              <div className="flex flex-col items-start gap-2 py-2">
                <CardTitle>{t('productRequisition.confirmProductRequisitionsSuccess')}</CardTitle>
                <CardDescription>
                  {t('productRequisition.confirmProductRequisitionsSuccessDescription')}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col mt-3 text-normal">
              <div className="flex flex-row gap-1">
                <p>{t('productRequisition.confirmProductRequisitionsSuccessDescription')}</p>
                <NavLink
                  to="/product-requisitions"
                  className="text-blue-500 transition-all duration-300 hover:underline"
                >
                  {t('productRequisition.here')}
                </NavLink>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default ProductRequisitionForm
