export default {
  appName: 'ScreenSpace',
  welcome: 'Bienvenido a Kitten UI',
  error: {
    upps: 'Upss algo salió mal',
  },
  cinemaHome: {
    title: 'Tus Cines',
    showsButtonText: 'Shows',
    newCinemaButtonText: 'Nuevo Cine',
  },
  cinemaForm: {
    buttonNextText: 'Siguiente',
    buttonPreviousText: 'Anterior',
    buttonFinishText: 'Terminar',
    details: {
      title: 'Detalle del Cine',
      inputName: 'Nombre del Cine',
      inputCompany: 'Nombre de la Compañía',
      inputPrice: 'Precio por Show',
      inputPricePlaceholder: 'Inserte Precio ($)',
      inputStatus: 'Estado',
      inputStatusPlaceholder: 'Temporalmente Inactivo',
    },
    address: {
      title: 'Dirección del Cine',
      inputAddress: 'Calle',
      inputPostalCode: 'Código Postal',
      inputCity: 'Ciudad',
      inputProvince: 'Provincia',
      inputCountry: 'País',
    },
    stepIndicator: {
      firstStep: 'Detalle del Cine',
      secondStep: 'Dirección',
      thirdStep: 'Resumen',
    },
  },
  cinemaSummary: {
    formTitle: 'Resumen',
    viewTitle: 'Detalle del Cine',
    cinemaText: 'Cine',
    streetText: 'Calle',
    cityText: 'Ciudad',
    provinceText: 'Provincia',
    countryText: 'País',
    priceText: 'Precio por Show',
    cinemaStatusText: 'Estado',
    companyText: 'Compañía',
    cinemaStatusActive: 'Activo',
    cinemaStatusInactive: 'Temporalmente Inactivo',
  },
  cinemaShows:{
    sectionName: 'Funciones',
    noDataMessage: 'Todavía no tienes ninguna función.\nComienza creando una nueva!',
    newShowButton: 'Crear nueva función',
    deleteShowWarningMessage: 'Está seguro de eliminar este item?\nEsta acción no se puede revertir'
  },
  newCinemaShow:{
    sectionName: 'Nueva Función',
    nextStepButtonLabel: 'Siguiente paso',
    previousStepButtonLabel: 'Paso anterior',
    submitButtonLabel: 'Crear función',
    steps: {
      firstStep: {
        label: 'Cine',
        title: 'Elige tu cine',
        subtitle: '',
      },
      secondStep: {
        label: 'Sala',
        title: 'Elige tu sala',
        subtitle: '',
      },
      thirdStep: {
        label: 'Película',
        title: 'Elige la película',
        subtitle: '',
      },
      fourthStep: {
        label: 'Fecha',
        title: 'Elige la fecha',
        subtitle: 'Elige la fecha y hora de la función',
      }
    },
  }
};
