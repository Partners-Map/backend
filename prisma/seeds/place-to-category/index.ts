import { Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const placeToCategoriesSeeds = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
) => {
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Ресторан Barceloneta',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Ресторан ЛондонЪ',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'SeaBus',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Мясной синдикат',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Хмели-Сунели',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Япона Мама',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Дон КихотДзе',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Sea Zone',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Magellan',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Дельфин и Русалка',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Морской',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Pita street',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Мой кофе',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Frida',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Зацепи',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Итэлия',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Best food Sochi',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Domileo',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Hooknrolla',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Сицилия',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'SimpleWine',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Рестораны, кафе и кофейни'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Pushkin',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Отдых'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'City Thai Spa',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Здоровье'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Classic',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Услуги красоты'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Don’t drama',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Услуги красоты'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Loren',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Услуги красоты'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Бест-Клининг',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Дом'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'World Class',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Спорт'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Iskra Sochi',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Магазин'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Ru_testo',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Магазин'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Цветочный дом',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Магазин'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Tirol club',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Спорт'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'SurfTeamSochi',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Спорт'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Na_yachte',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Отдых'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Омега Сириус',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Путешествия'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Дельта Сириус',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Путешествия'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Альфа Сириус',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Путешествия'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Green Flow',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Путешествия'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Swissotel Resort Сочи Камелия',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Путешествия'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: '"Сочи-Парк" ​Тематический парк развлечений',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Отдых'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: '"Top" ​Компьютерная академия',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Образование'
        }
      }
    }
  });
  await prisma.placeToCategory.create({
    data: {
      place: {
        connect: {
          title_description_kitchen: {
            title: 'Learn to Learn',
            description: '',
            kitchen: ''
          }
        }
      },
      category: {
        connect: {
          title: 'Образование'
        }
      }
    }
  });
};
