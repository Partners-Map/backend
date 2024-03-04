import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(async () => {
  await prisma.role.createMany({
    data: [
      {
        title: 'админ'
      },
      {
        title: 'партнер'
      }
    ]
  });
  const [adminRole, partnerRole] = await prisma.role.findMany();
  await prisma.user.createMany({
    data: [
      {
        email: 'admin@example.com',
        password: 'qwerty123',
        roleId: adminRole.id
      },
      {
        email: 'partner@example.com',
        password: 'qwerty123',
        roleId: partnerRole.id
      },
      {
        email: 'user1@example.com',
        password: 'qwerty123',
        roleId: partnerRole.id
      },
      {
        email: 'user2@example.com',
        password: 'qwerty123',
        roleId: partnerRole.id
      }
    ]
  });
  const partners = await prisma.partner.createMany({
    data: [
      {
        name: 'London Restaurant Group'
      },
      {
        name: 'Mantera Restaurants'
      },
      {
        name: 'Мой кофе'
      },
      {
        name: 'Фрида'
      },
      {
        name: 'Зацепи'
      },
      {
        name: 'Итэлия'
      },
      {
        name: 'BestFOOD'
      },
      {
        name: 'Domileo'
      },
      {
        name: 'Hooknrolla'
      },
      {
        name: 'Сицилия'
      },
      {
        name: 'SimpleWine'
      },
      {
        name: 'Pushkin'
      },
      {
        name: 'City Thai Spa'
      },
      {
        name: 'Classic'
      },
      {
        name: 'Don’t drama'
      },
      {
        name: 'Loren'
      },
      {
        name: 'Бест-Клининг'
      },
      {
        name: 'World Class'
      },
      {
        name: 'Iskra Sochi'
      },
      {
        name: 'Ru_testo'
      },
      {
        name: 'Цветочный дом'
      },
      {
        name: 'Тироль клаб'
      },
      {
        name: 'SurfTeamSochi'
      },
      {
        name: 'Прогулки на яхтах и катерах'
      },
      {
        name: 'Пара смыслов'
      },
      {
        name: 'Sirius'
      },
      {
        name: 'Green Flow'
      },
      {
        name: 'Swissotel Камелия Сочи'
      },
      {
        name: 'Сочи-Парк'
      },
      {
        name: 'Компьютерная академия ТОП'
      },
      {
        name: 'Learn to Learn'
      }
    ]
  });
  await prisma.category.createMany({
    data: [
      {
        title: 'Рестораны, кафе и кофейни'
      },
      {
        title: 'Отдых'
      },
      {
        title: 'Здоровье'
      },
      {
        title: 'Услуги красоты'
      },
      {
        title: 'Дом'
      },
      {
        title: 'Спорт'
      },
      {
        title: 'Магазин'
      },
      {
        title: 'Путешествия'
      },
      {
        title: 'Образование'
      }
    ]
  });

  await prisma.discountType.createMany({
    data: [
      {
        title: 'Скидка'
      },
      {
        title: 'Кэшбэк'
      }
    ]
  });
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

  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: '​Несебрская',
      house: '6',
      latitude: 43.582038,
      longitude: 39.719235,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Ресторан Barceloneta',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: '​Несебрская',
      house: '6',
      latitude: 43.582038,
      longitude: 39.719235,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Ресторан ЛондонЪ',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Орджоникидзе',
      house: '5а',
      latitude: 43.578576,
      longitude: 39.723933,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'SeaBus',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Орджоникидзе',
      house: '4б',
      latitude: 43.578838,
      longitude: 39.724382,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Мясной синдикат',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: '​Курортный проспект',
      house: '50в',
      latitude: 43.578838,
      longitude: 39.724382,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Хмели-Сунели',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Орджоникидзе',
      house: '25а',
      latitude: 43.574875,
      longitude: 39.728707,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Япона Мама',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Приморская',
      house: '17',
      latitude: 43.573266,
      longitude: 39.726848,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Дон КихотДзе',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Приморская',
      house: '17а',
      latitude: 43.572909,
      longitude: 39.727184,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Sea Zone',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Урицкого',
      house: '18Ак2',
      latitude: 43.3889,
      longitude: 39.984013,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Magellan',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: '​Войкова',
      house: '1/5',
      latitude: 43.580843,
      longitude: 39.718615,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Дельфин и Русалка',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: '​Войкова',
      house: '1',
      latitude: 43.580843,
      longitude: 39.718615,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Морской',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Несебрская',
      house: '1/2',
      latitude: 43.58051,
      longitude: 39.719334,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Pita street',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Войкова',
      house: '4в',
      latitude: 43.58064,
      longitude: 39.720259,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Мой кофе',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Войкова',
      house: '1/1',
      latitude: 43.58051,
      longitude: 39.719702,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Frida',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: '​Приморская',
      house: '3/10',
      latitude: 43.57727,
      longitude: 39.722334,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Зацепи',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: '​Пластунская',
      house: '123Ак2',
      latitude: 43.61607,
      longitude: 39.737713,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Best food Sochi',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Войкова',
      house: '1/1',
      latitude: 43.61607,
      longitude: 39.737713,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Domileo',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: '​Навагинская',
      house: '11к5',
      latitude: 43.595201,
      longitude: 39.725873,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Сицилия',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Горького',
      house: '53',
      latitude: 43.589971,
      longitude: 39.726224,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'SimpleWine',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Эстосадок',
      street: 'Времена Года',
      house: '3',
      latitude: 43.683119,
      longitude: 40.25985,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'SimpleWine',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: '​Воровского',
      house: '5',
      latitude: 43.586602,
      longitude: 39.719558,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Pushkin',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: '​Черноморская',
      house: '6',
      latitude: 43.569897,
      longitude: 39.733949,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'City Thai Spa',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Курортный проспект',
      house: '92/5',
      latitude: 43.562463,
      longitude: 39.761824,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'City Thai Spa',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Плеханова',
      house: '34б',
      latitude: 43.627073,
      longitude: 39.700873,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'City Thai Spa',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Воровского',
      house: '5',
      latitude: 43.586602,
      longitude: 39.719558,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Classic',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: '​Трунова',
      house: '6к1',
      latitude: 43.593569,
      longitude: 39.735198,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Don’t drama',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Виноградная',
      house: '20',
      latitude: 43.604276,
      longitude: 39.719136,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Loren',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Курортный проспект',
      house: '16',
      latitude: 43.584388,
      longitude: 39.720277,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Бест-Клининг',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: '​Демократическая',
      house: '52',
      latitude: 43.426401,
      longitude: 39.927599,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Бест-Клининг',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: '​Островского',
      house: '9',
      latitude: 43.585766,
      longitude: 39.72078,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Iskra Sochi',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: '​Яна Фабрициуса',
      house: '58/2',
      latitude: 43.58608,
      longitude: 39.755051,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Ru_testo',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Транспортная',
      house: '74/5а',
      latitude: 43.589364,
      longitude: 39.75718,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Цветочный дом',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Донская',
      house: '3',
      latitude: 43.608577,
      longitude: 39.731452,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Цветочный дом',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Калараша',
      house: '141',
      latitude: 43.913071,
      longitude: 39.340011,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Цветочный дом',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Карла Маркса',
      house: '12',
      latitude: 44.097608,
      longitude: 39.077011,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Цветочный дом',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Эстосадок',
      street: 'Горная Карусель',
      house: '5',
      latitude: 43.683928,
      longitude: 40.264997,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Tirol club',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Эстосадок',
      street: 'Железнодорожная',
      house: '9/1а',
      latitude: 43.508494,
      longitude: 39.867493,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'SurfTeamSochi',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Несебрская',
      house: '9/1а',
      latitude: 43.581907,
      longitude: 39.718507,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Na_yachte',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сириус',
      street: '​Олимпийский проспект',
      house: '3',
      latitude: 43.411603,
      longitude: 39.950452,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Омега Сириус',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сириус',
      street: 'Триумфальный проезд',
      house: '1',
      latitude: 43.412297,
      longitude: 39.965957,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Дельта Сириус',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сириус',
      street: 'Морской бульвар',
      house: '1',
      latitude: 43.411465,
      longitude: 39.93581,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Альфа Сириус',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Эстосадок',
      street: '​Сулимовка',
      house: '9',
      latitude: 43.664661,
      longitude: 40.314737,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Green Flow',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: '​Курортный проспект',
      house: '89',
      latitude: 43.562666,
      longitude: 39.756614,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Swissotel Resort Сочи Камелия',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сириус',
      street: 'Международная',
      house: '10Б',
      latitude: 43.404765,
      longitude: 39.96496,
      place: {
        connect: {
          title_description_kitchen: {
            title: '"Сочи-Парк" ​Тематический парк развлечений',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сириус',
      street: 'Олимпийский проспект',
      house: '21к2',
      latitude: 43.403606,
      longitude: 39.964241,
      place: {
        connect: {
          title_description_kitchen: {
            title: '"Сочи-Парк" ​Тематический парк развлечений',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
  await prisma.address.create({
    data: {
      city: 'Сочи',
      street: 'Московская',
      house: '10',
      latitude: 43.592825,
      longitude: 39.726197,
      place: {
        connect: {
          title_description_kitchen: {
            title: '"Top" ​Компьютерная академия',
            description: '',
            kitchen: ''
          }
        }
      }
    }
  });
})()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
