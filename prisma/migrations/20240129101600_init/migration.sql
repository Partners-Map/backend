-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partners" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "requirements" TEXT[],
    "additionalInformation" TEXT,
    "categoryId" TEXT NOT NULL,
    "placeId" TEXT NOT NULL,

    CONSTRAINT "Partners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorys" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Categorys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Places" (
    "id" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,

    CONSTRAINT "Places_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartnersOnPlaces" (
    "partnersId" TEXT NOT NULL,
    "placesId" TEXT NOT NULL,

    CONSTRAINT "PartnersOnPlaces_pkey" PRIMARY KEY ("partnersId","placesId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_roleId_key" ON "Users"("roleId");

-- CreateIndex
CREATE UNIQUE INDEX "Roles_title_key" ON "Roles"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Partners_title_key" ON "Partners"("title");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partners" ADD CONSTRAINT "Partners_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categorys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnersOnPlaces" ADD CONSTRAINT "PartnersOnPlaces_partnersId_fkey" FOREIGN KEY ("partnersId") REFERENCES "Partners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnersOnPlaces" ADD CONSTRAINT "PartnersOnPlaces_placesId_fkey" FOREIGN KEY ("placesId") REFERENCES "Places"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
