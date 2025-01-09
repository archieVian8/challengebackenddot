-- CreateTable
CREATE TABLE `user` (
    `idUser` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `elementarySchool` VARCHAR(191) NOT NULL,
    `juniorHighSchool` VARCHAR(191) NOT NULL,
    `seniorHighSchool` VARCHAR(191) NOT NULL,
    `university` VARCHAR(191) NOT NULL,
    `gender` ENUM('MALE', 'FEMALE') NOT NULL,
    `about` VARCHAR(191) NOT NULL,
    `birthdate` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`idUser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `eventOrganizer` (
    `idOrganizer` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `organizerName` VARCHAR(191) NOT NULL,
    `organizerInstitution` VARCHAR(191) NOT NULL,
    `organizerAddress` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `eventOrganizer_email_key`(`email`),
    PRIMARY KEY (`idOrganizer`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `academicEvents` (
    `idAcademicEvents` INTEGER NOT NULL AUTO_INCREMENT,
    `idOrganizer` INTEGER NOT NULL,
    `eventsName` VARCHAR(191) NOT NULL,
    `eventsLoc` VARCHAR(191) NOT NULL,
    `eventsJenjang` ENUM('SekolahDasar', 'SekolahMenengahPertama', 'SekolahMenengahAtas', 'Universitas', 'Umum') NOT NULL,
    `eventsHeld` ENUM('luring', 'daring') NOT NULL,
    `eventCategory` VARCHAR(191) NOT NULL,
    `eventsDate` DATETIME(3) NOT NULL,
    `registrationDate` DATETIME(3) NOT NULL,
    `eventsTheme` VARCHAR(191) NOT NULL,
    `registrationFee` DOUBLE NOT NULL,
    `capacityTotal` INTEGER NULL,
    `capacityTersisa` INTEGER NULL,
    `capacityStatus` ENUM('full', 'available') NOT NULL,
    `deskripsiEvent` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idAcademicEvents`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserJoinAcademicEvents` (
    `idUserJoinAcademicEvents` INTEGER NOT NULL AUTO_INCREMENT,
    `idUser` INTEGER NOT NULL,
    `idAcademicEvents` INTEGER NOT NULL,

    PRIMARY KEY (`idUserJoinAcademicEvents`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `academicEvents` ADD CONSTRAINT `academicEvents_idOrganizer_fkey` FOREIGN KEY (`idOrganizer`) REFERENCES `eventOrganizer`(`idOrganizer`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserJoinAcademicEvents` ADD CONSTRAINT `UserJoinAcademicEvents_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `user`(`idUser`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserJoinAcademicEvents` ADD CONSTRAINT `UserJoinAcademicEvents_idAcademicEvents_fkey` FOREIGN KEY (`idAcademicEvents`) REFERENCES `academicEvents`(`idAcademicEvents`) ON DELETE RESTRICT ON UPDATE CASCADE;
