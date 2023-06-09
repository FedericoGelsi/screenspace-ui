export default {
  appName: 'ScreenSpace',
  welcome: 'Bienvenido a Kitten UI',
  error: {
    upps: 'Upss algo salió mal',
  },
  initialLogin: {
    title: 'ScreenSpace',
    subtitle: 'Bienvenido a la app de cines más completa',
    buttons: {
      userLogin: 'Ingresar con Google',
      adminLogin: 'Ingreso para negocios',
    },
  },
  userLogin: {
    sectionName: 'Configuración de Perfil',
    form: {
      avatarTip: 'Cambiar foto de perfil',
      username: {
        label: 'Nombre de Usuario',
        placeholder: 'Agrega tu nombre de usuario',
      },
    },
    saveButtonText: 'Guardar cambios',
    footer: 'Siempre vas a poder modificarlo desde ',
  },
  userHome: {
    sectionName: 'Inicio',
    title: 'Bienvenido',
    subtitle: 'Relajemonos y veamos una película!',
    searchBar: {
      placeholder: 'Qué película queres ver?',
    },
    filter: {
      buttonTitle: 'Filtro',
    },
    showingSectionName: 'Actualmente en cartelera',
    noDataMessage:
      'No hay ninguna función en cartelera actualmente\nPor favor, pruebe de nuevo más tarde',
  },
  userSettings: {
    sectionName: 'Configuraciones',
    profile: 'Actualización de perfil',
    logout: 'Desconectar',
    deleteProfile: 'Borrar perfil'
  },
  userBookings: {
    sectionName: 'Tus entradas',
  },
  movieDetails: {
    sectionName: 'Detalles de la Película',
    infoColumn: {
      genreLabel: 'Género',
      durationLabel: 'Duración',
      ratingLabel: 'Valoración',
      reviewsLabel: 'Comentarios',
    },
    synopsisLabel: 'Sinópsis',
    bookingButtonLabel: 'Sacar entrada',
  },
  cinemaHome: {
    title: 'Tus Cines',
    showsButtonText: 'Shows',
    newCinemaButtonText: 'Nuevo Cine',
    noDataText:
      'No posee ningún cine en este momento. Empieza por crear uno nuevo!',
  },
  cinemaForm: {
    buttonNextText: 'Siguiente',
    buttonPreviousText: 'Anterior',
    buttonFinishText: 'Terminar',
    successModalMessage: 'Tu cine se creó correctamente',
    successModalButtonMessage: 'Inicio',
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
  cinemaDetails: {
    title: 'Información del Cine',
    editButtonText: 'Editar Cine',
    hallsButtonText: 'Salas',
  },
  cinemaHalls: {
    noDataText: 'No tiene salas actualmente',
    finishButtonText: 'Terminar',
    confirmationModalText: 'Está seguro?',
    form: {
      name: 'Nombre Sala',
      numberOfLinesText: 'Numero de filas',
      numberOfSeatsText: 'Numero de asientos por fila',
      status: 'Estado',
      activeText: 'Activo',
      inactiveText: 'Inactivo',
      saveButtonText: 'Guardar Cambios',
    },
  },
  hallCard: {
    removeButtonText: 'Eliminar',
    editButtonText: 'Editar',
  },
  hallHeader: {
    headerTitle: 'Salas',
    addButtonText: 'Añadir Sala',
  },
  cinemaShows: {
    sectionName: 'Funciones',
    noDataMessage:
      'Todavía no tienes ninguna función.\nComienza creando una nueva!',
    newShowButton: 'Crear nueva función',
    deleteShowWarningMessage:
      'Está seguro de eliminar este item?\nEsta acción no se puede revertir',
    showCard: {
      hallLabel: 'Sala',
      dateTimeLabel: 'Horario',
    },
    dateFilterPlaceholder: 'Filtrar por Fecha',
  },
  cinemaCard: {
    showsButton: 'Ver funciones',
  },
  newCinemaShow: {
    sectionName: 'Nueva Función',
    editSectionName: 'Editar Función',
    nextStepButtonLabel: 'Siguiente paso',
    previousStepButtonLabel: 'Paso anterior',
    submitButtonLabel: 'Guardar función',
    finishButtonLabel: 'Volver a Funciones',
    steps: {
      firstStep: {
        label: 'Cine',
        title: 'Elige tu cine',
        subtitle: '',
        isAvailableLabel: 'No disponible temporalmente',
        searchBar: {
          placeholder: 'Busca tu cine',
        },
      },
      secondStep: {
        label: 'Sala',
        title: 'Elige tu sala',
        subtitle: '',
        maxCapacityLabel: 'Capacidad máxima',
        isAvailableLabel: 'No disponible temporalmente',
        searchBar: {
          placeholder: 'Busca tu sala',
        },
      },
      thirdStep: {
        label: 'Película',
        title: 'Elige la película',
        subtitle: '',
        movieLenghtLabel: 'Duración',
        isShowingLabel: 'No disponible por el momento',
        searchBar: {
          placeholder: 'Busca la película',
        },
      },
      fourthStep: {
        label: 'Fecha',
        title: 'Elige la fecha',
        subtitle: 'Elige la fecha y horario de la función',
        timePickerLabel: 'Horario de inicio',
        timePickerPlaceholder: 'Elige el horario de inicio',
      },
      summaryStep: {
        label: 'Resumen',
        title: 'Resumen de la Función',
        subtitle: 'Por favor revisa los datos antes de guardar',
      },
    },
  },
  calendar: {
    dayNames: {
      short: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
      long: [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
      ],
    },
    monthNames: {
      short: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ],
      long: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
    },
  },
  adminProfileTitle: 'Tu Perfil',
};
