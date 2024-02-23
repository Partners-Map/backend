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
      name: 'Ресторан Barceloneta',
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
      name: 'Ресторан ЛондонЪ',
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
      name: 'SeaBus',
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
      name: 'Мясной синдикат',
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
      name: 'Хмели-Сунели',
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
      name: 'Япона Мама',
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
      name: 'Дон Кихотзе',
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
      name: 'Sea Zone',
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
      name: 'Magellan',
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
      name: 'Дельфин и Русалка',
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
      name: 'Морской',
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
      name: 'Pita street',
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
      name: 'Мой кофе',
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
      name: 'Frida',
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
      name: 'Зацепи',
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
      name: 'Итэлия',
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
      name: 'Best food Sochi',
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
      name: 'Domileo',
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
      name: 'Hooknrolla',
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
      name: 'Сицилия',
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
      name: 'SimpleWine',
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
      name: 'Pushkin',
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
      name: 'City Thai Spa',
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
      name: 'Classic',
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
      name: 'Don’t drama',
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
      name: 'Loren',
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
      name: 'Бест-Клининг',
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
      name: 'World Class',
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
      name: 'Iskra Sochi',
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
      name: 'Ru_testo',
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
      name: 'Цветочный дом',
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
      name: 'Tirol club',
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
      name: 'SurfTeamSochi',
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
      name: 'Na_yachte',
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
      name: 'Омега Сириус',
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
      name: 'Дельта Сириус',
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
      name: 'Альфа Сириус',
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
      name: 'Green Flow',
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
      name: 'Swissotel Resort Сочи Камелия',
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
      name: '"Сочи-Парк" ​Тематический парк развлечений',
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
      name: '"Top" ​Компьютерная академия',
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
      name: 'Learn to Learn',
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

  // const places = await prisma.place.findMany();
  // await prisma.address.createMany({
  //   data: [
  //     {
  //       city: 'Сочи',
  //       street: 'Курортный проспект',
  //       house: '74',
  //       latitude: 43.568259,
  //       longitude: 39.742147,
  //       placeId: places[0].id
  //     },
  //     {
  //       city: 'Сочи',
  //       street: 'Виноградная улица',
  //       house: '27',
  //       latitude: 43.596652,
  //       longitude: 39.713004,
  //       placeId: places[1].id
  //     },
  //     {
  //       city: 'Сочи',
  //       street: 'Войкова',
  //       house: '1',
  //       latitude: 43.580808,
  //       longitude: 39.71866,
  //       placeId: places[2].id
  //     },
  //     {
  //       city: 'Сочи',
  //       street: 'Новая Заря',
  //       house: '7',
  //       latitude: 43.605961,
  //       longitude: 39.732181,
  //       placeId: places[3].id
  //     }
  //   ]
  // });
  // const categories = await prisma.category.findMany();
  // await prisma.placeToCategory.createMany({
  //   data: [
  //     {
  //       placeId: places[0].id,
  //       categoryId: categories[0].id
  //     },
  //     {
  //       placeId: places[1].id,
  //       categoryId: categories[1].id
  //     },
  //     {
  //       placeId: places[2].id,
  //       categoryId: categories[2].id
  //     },
  //     {
  //       placeId: places[3].id,
  //       categoryId: categories[3].id
  //     }
  //   ]
  // });
})()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
