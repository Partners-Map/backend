import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const placesSeeds = async (prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>) => {
  const [discountT, cashbackT] = await prisma.discountType.findMany();
  await prisma.place.create({
    data: {
      title: 'Ресторан Barceloneta',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: [
            'Скачайте приложение LRG',
            'Зарегистрируйтесь в нем',
            'Напишите в телеграм @alekseeva42 свои имя и фамилию, а также телефон указанные при регистрации в приложении LRG'
          ],
          information: '',
          amount: 20,
          discountTypeId: cashbackT.id
        }
      },
      partner: {
        connect: {
          name: 'London Restaurant Group'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Ресторан ЛондонЪ',
      description: '',
      avgReceipt: 1,
      discount: {
        connect: {
          conditions_amount_information_discountTypeId: {
            conditions: [
              'Скачайте приложение LRG',
              'Зарегистрируйтесь в нем',
              'Напишите в телеграм @alekseeva42 свои имя и фамилию, а также телефон указанные при регистрации в приложении LRG'
            ],
            information: '',
            amount: 20,
            discountTypeId: cashbackT.id
          }
        }
      },
      partner: {
        connect: {
          name: 'London Restaurant Group'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'SeaBus',
      description: '',
      avgReceipt: 1,
      discount: {
        connect: {
          conditions_amount_information_discountTypeId: {
            conditions: [
              'Скачайте приложение LRG',
              'Зарегистрируйтесь в нем',
              'Напишите в телеграм @alekseeva42 свои имя и фамилию, а также телефон указанные при регистрации в приложении LRG'
            ],
            information: '',
            amount: 20,
            discountTypeId: cashbackT.id
          }
        }
      },
      partner: {
        connect: {
          name: 'London Restaurant Group'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Мясной синдикат',
      description: '',
      avgReceipt: 1,
      discount: {
        connect: {
          conditions_amount_information_discountTypeId: {
            conditions: [
              'Скачайте приложение LRG',
              'Зарегистрируйтесь в нем',
              'Напишите в телеграм @alekseeva42 свои имя и фамилию, а также телефон указанные при регистрации в приложении LRG'
            ],
            information: '',
            amount: 20,
            discountTypeId: cashbackT.id
          }
        }
      },
      partner: {
        connect: {
          name: 'London Restaurant Group'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Хмели-Сунели',
      description: '',
      avgReceipt: 1,
      discount: {
        connect: {
          conditions_amount_information_discountTypeId: {
            conditions: [
              'Скачайте приложение LRG',
              'Зарегистрируйтесь в нем',
              'Напишите в телеграм @alekseeva42 свои имя и фамилию, а также телефон указанные при регистрации в приложении LRG'
            ],
            information: '',
            amount: 20,
            discountTypeId: cashbackT.id
          }
        }
      },
      partner: {
        connect: {
          name: 'London Restaurant Group'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Япона Мама',
      description: '',
      avgReceipt: 1,
      discount: {
        connect: {
          conditions_amount_information_discountTypeId: {
            conditions: [
              'Скачайте приложение LRG',
              'Зарегистрируйтесь в нем',
              'Напишите в телеграм @alekseeva42 свои имя и фамилию, а также телефон указанные при регистрации в приложении LRG'
            ],
            information: '',
            amount: 20,
            discountTypeId: cashbackT.id
          }
        }
      },
      partner: {
        connect: {
          name: 'London Restaurant Group'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Дон КихотДзе',
      description: '',
      avgReceipt: 1,
      discount: {
        connect: {
          conditions_amount_information_discountTypeId: {
            conditions: [
              'Скачайте приложение LRG',
              'Зарегистрируйтесь в нем',
              'Напишите в телеграм @alekseeva42 свои имя и фамилию, а также телефон указанные при регистрации в приложении LRG'
            ],
            information: '',
            amount: 20,
            discountTypeId: cashbackT.id
          }
        }
      },
      partner: {
        connect: {
          name: 'London Restaurant Group'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Sea Zone',
      description: '',
      avgReceipt: 1,
      discount: {
        connect: {
          conditions_amount_information_discountTypeId: {
            conditions: [
              'Скачайте приложение LRG',
              'Зарегистрируйтесь в нем',
              'Напишите в телеграм @alekseeva42 свои имя и фамилию, а также телефон указанные при регистрации в приложении LRG'
            ],
            information: '',
            amount: 20,
            discountTypeId: cashbackT.id
          }
        }
      },
      partner: {
        connect: {
          name: 'London Restaurant Group'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Magellan',
      description: '',
      avgReceipt: 1,
      discount: {
        connect: {
          conditions_amount_information_discountTypeId: {
            conditions: [
              'Скачайте приложение LRG',
              'Зарегистрируйтесь в нем',
              'Напишите в телеграм @alekseeva42 свои имя и фамилию, а также телефон указанные при регистрации в приложении LRG'
            ],
            information: '',
            amount: 20,
            discountTypeId: cashbackT.id
          }
        }
      },
      partner: {
        connect: {
          name: 'London Restaurant Group'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Дельфин и Русалка',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Оформить карту'],
          amount: 20,
          information: 'Для оформления карты зарегистрируйтесь по ссылке: ',
          discountTypeId: cashbackT.id
        }
      },
      partner: {
        connect: {
          name: 'Mantera Restaurants'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Морской',
      description: '',
      avgReceipt: 1,
      discount: {
        connect: {
          conditions_amount_information_discountTypeId: {
            conditions: ['Оформить карту'],
            amount: 20,
            information: 'Для оформления карты зарегистрируйтесь по ссылке: ',
            discountTypeId: cashbackT.id
          }
        }
      },
      partner: {
        connect: {
          name: 'Mantera Restaurants'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Pita street',
      description: '',
      avgReceipt: 1,
      discount: {
        connect: {
          conditions_amount_information_discountTypeId: {
            conditions: ['Оформить карту'],
            amount: 20,
            information: 'Для оформления карты зарегистрируйтесь по ссылке: ',
            discountTypeId: cashbackT.id
          }
        }
      },
      partner: {
        connect: {
          name: 'Mantera Restaurants'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Мой кофе',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Предъявить карту лояльности с 12:00 до 16:00'],
          amount: 20,
          information: 'Карту можно взять на охране или у @alekseeva42',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Мой кофе'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Frida',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['При оплате показать карту резидента "Сберпорт" сказать, что вы сотрудник Сбера'],
          amount: 10,
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Фрида'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Зацепи',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: [
            'Зарегистрироваться в программе лояльности по ссылке: https://form.cardpr.com/bc38a02a-5e28-4342-b477-65a7da36a54c'
          ],
          amount: 10,
          discountTypeId: cashbackT.id
        }
      },
      partner: {
        connect: {
          name: 'Зацепи'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Итэлия',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: [
            'Зарегистрироваться в программе лояльности по ссылке: https://form.p-h.app/6dea389637a87812d6c2cf487496cbc1'
          ],
          amount: 20,
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Итэлия'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Best food Sochi',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Заказать через нашего менеджера Лиру +79189666888', 'Написать, что вы из СберПорта'],
          amount: 15,
          information: 'Скидка на комплексы с доставкой в офис 15%, при доставке на выбранный адрес 10%',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'BestFOOD'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Domileo',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Предъявить карту резидента "Сберпорт"'],
          amount: 20,
          information: 'Скидка на все от 10% до 20%',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Domileo'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Hooknrolla',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: [
            'Быть резидентов офиса',
            'Зарегистрируйтесь в программе лояльности по ссылке: https://hooknrolla.quickresto.ru/cpr/registration',
            'Написать в телеграм @alekseeva42 свое ФИО и телефон указанный при регистрации'
          ],
          amount: 15,
          discountTypeId: cashbackT.id
        }
      },
      partner: {
        connect: {
          name: 'Hooknrolla'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Сицилия',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: [
            'Быть сотрудником банка',
            'Ввести промокод "ITСбер"',
            'Заказ должен быть на адрес Войкова, 2'
          ],
          amount: 10,
          information: 'Скидка на все от 10% до 20%',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Сицилия'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'SimpleWine',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Ввести промокод "20SW2023"', 'Заказ должен быть через приложение или сайт'],
          amount: 10,
          information: 'Заказ забираете в магазине. Возможно получение сразу после оформления',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'SimpleWine'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Pushkin',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Предъявить карту резидента "Сберпорт"'],
          amount: 20,
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Pushkin'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'City Thai Spa',
      description: '',
      avgReceipt: 1,
      discount: {
        connect: {
          conditions_amount_information_discountTypeId: {
            conditions: ['Предъявить карту резидента "Сберпорт"'],
            amount: 20,
            information: '',
            discountTypeId: discountT.id
          }
        }
      },
      partner: {
        connect: {
          name: 'City Thai Spa'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Classic',
      description: '',
      avgReceipt: 1,
      discount: {
        connect: {
          conditions_amount_information_discountTypeId: {
            conditions: ['Предъявить карту резидента "Сберпорт"'],
            amount: 20,
            information: '',
            discountTypeId: discountT.id
          }
        }
      },
      partner: {
        connect: {
          name: 'Classic'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Don’t drama',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Предъявить карту резидента "Сберпорт"'],
          amount: 15,
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Don’t drama'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Loren',
      description: '',
      avgReceipt: 1,
      discount: {
        connect: {
          conditions_amount_information_discountTypeId: {
            conditions: ['Предъявить карту резидента "Сберпорт"'],
            amount: 20,
            information: '',
            discountTypeId: discountT.id
          }
        }
      },
      partner: {
        connect: {
          name: 'Loren'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Бест-Клининг',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Предъявить карту резидента "Сберпорт"'],
          amount: 10,
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Бест-Клининг'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'World Class',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Быть работником Сбербанка', 'Абонемент должен быть на: 3, 6 или 12 месяцев'],
          amount: 0,
          information: 'Подробности уточняйте по телефону и в офисе продаж тренажерного зала',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'World Class'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Iskra Sochi',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: [
            'Быть работником СберПорта',
            'Зарегистрироваться по ссылке: https://app.boomerangme.cards/getpass/44764?utm_source=qr'
          ],
          amount: 10,
          information: 'Подробности уточняйте по телефону и в офисе продаж тренажерного зала',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Iskra Sochi'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Ru_testo',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Предъявить карту резидента "Сберпорт"', 'Сказать, что вы из IT-центра'],
          amount: 10,
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Ru_testo'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Цветочный дом',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Предъявить карту резидента "Сберпорт"', 'Покупка цветов или композиций'],
          amount: 10,
          information: 'Для онлайн заказа пишите управляющей Марине +79183048990',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Цветочный дом'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Tirol club',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Предъявить карту резидента "Сберпорт"'],
          amount: 10,
          information:
            'Предложение распространяется: прокат горнолыжного снаряжения (в т.ч. есть одежда для взрослых), горнолыжная школа обучение катанию на лыжах и сноуборде для детей и взрослых. Предложение действует только на Красной поляне',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Тироль клаб'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'SurfTeamSochi',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: [
            'Бронировать через менеджера Люсю +79829286391',
            'Сказать, что вы из Сбера',
            'Предъявить фото карты резидента "Сберпорт"'
          ],
          amount: 0,
          information:
            'Индивидуальная цена на аренд саов на станции в Хосте - 300 руб/ч с 11:00-18:00. Также действует индивидуальная цена на тур в каньон "Чертовы ворота"',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'SurfTeamSochi'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Na_yachte',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Бронировать через менеджера Анастасию +79805554445', 'Сказать, что вы из Сбера'],
          amount: 0,
          information: 'Каталог представлен в Whatsapp',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Прогулки на яхтах и катерах'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Омега Сириус',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Ввести промокод "Siriusclub"'],
          amount: 20,
          information: 'С 10 января 2024 года по 29 сентября 2024 года',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Sirius'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Дельта Сириус',
      description: '',
      avgReceipt: 1,
      discount: {
        connect: {
          conditions_amount_information_discountTypeId: {
            conditions: ['Ввести промокод "Siriusclub"'],
            amount: 20,
            information: 'С 10 января 2024 года по 29 сентября 2024 года',
            discountTypeId: discountT.id
          }
        }
      },
      partner: {
        connect: {
          name: 'Sirius'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Альфа Сириус',
      description: '',
      avgReceipt: 1,
      discount: {
        connect: {
          conditions_amount_information_discountTypeId: {
            conditions: ['Ввести промокод "Siriusclub"'],
            amount: 20,
            information: 'С 10 января 2024 года по 29 сентября 2024 года',
            discountTypeId: discountT.id
          }
        }
      },
      partner: {
        connect: {
          name: 'Sirius'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Green Flow',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Ввести промокод "GreenFlClub2023"'],
          amount: 20,
          information: 'Скидка 5-20% на проживание и услуги. С 19 марта 2023 года по 18 марта 2024',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Green Flow'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Swissotel Resort Сочи Камелия',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: [
            'Бронирование номеров осуществляется через отдел бронирования - Reservations.Sochi@swissotel.com',
            'Назвать кодовое слово "Сбербанк"',
            'Писать необходимо с вашей рабочей почты @sberbank.ru'
          ],
          amount: 20,
          information:
            'Скидки в низкий сезон -20% (с 01.02-31.05 и 01.10-27.12). В высокий сезон -10% (01.06-30.09) по запросу, в зависимости от загрузки. В стоимость проживания входит: завтрак, посещение спа-центра (фитнес-центр, сауна, хаммам, джакузи), парковка. При проживании в отеле также будет предоставляться скидка -10% на услуги SPA комплекса.',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Swissotel Камелия Сочи'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: '"Сочи-Парк" ​Тематический парк развлечений',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: [
            'Зайти на сайт https://spasibosberbank.ru/club?path=/club',
            'Выберать Сочи-Парк отель',
            'Показать при оплате на кассе штрих-код из личного кабинета'
          ],
          amount: 20,
          information: 'Скидка на билеты.',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Сочи-Парк'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: '"Top" ​Компьютерная академия',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Быть сотрудником банка'],
          amount: 10,
          information:
            'Скидка на обучение в «Академии ТОП». Для сотрудников и детей сотрудников Сбербанка действуют специальные цены на платные образовательные услуги Академии',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Компьютерная академия ТОП'
        }
      }
    }
  });
  await prisma.place.create({
    data: {
      title: 'Learn to Learn',
      description: '',
      avgReceipt: 1,
      discount: {
        create: {
          conditions: ['Ввести промокод "LEARN2023"'],
          amount: 25,
          information: 'Скидка на программы изучения английского. С 1 июля 2023 года по 30 июня 2024 года',
          discountTypeId: discountT.id
        }
      },
      partner: {
        connect: {
          name: 'Learn to Learn'
        }
      }
    }
  });
};
