import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const addressesSeeds = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
) => {
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
      street: '​Приморская',
      house: '3/14',
      latitude: 43.576334,
      longitude: 39.722892,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Итэлия',
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
      street: 'Несебрская',
      house: '1a',
      latitude: 43.584564,
      longitude: 39.716879,
      place: {
        connect: {
          title_description_kitchen: {
            title: 'World Class',
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
};
