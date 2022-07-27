create table `account` (
  `id` bigint not null auto_increment primary key,
  `name` varchar(50) not null
);

create table `account_transaction` (
  `id` bigint not null auto_increment primary key,
  `timestamp` datetime(3) not null default now(3),
  `account_id` bigint not null,
  `value` decimal(18, 2) not null,
  foreign key (`account_id`) references `account` (`id`)
);

create table `user` (
  `id` bigint not null auto_increment primary key,
  `account_id` bigint not null,
  `email` varchar(100) not null unique,
  `password` varchar(300) not null,
  foreign key (`account_id`) references `account` (`id`)
);

create table `asset` (
  `id` bigint not null auto_increment primary key,
  `account_id` bigint not null,
  `code` varchar(20) not null unique,
  `value` decimal(18, 2) not null,
  foreign key (`account_id`) references `account` (`id`)
);

create table `asset_transaction` (
  `id` bigint not null auto_increment primary key,
  `timestamp` datetime(3) not null default now(3),
  `asset_id` bigint not null,
  `quantity` integer not null,
  `value` decimal(18,2) not null,
  `seller_id` bigint not null,
  `buyer_id` bigint not null,
  foreign key (`asset_id`) references `asset` (`id`),
  foreign key (`seller_id`) references `account` (`id`),
  foreign key (`buyer_id`) references `account` (`id`)
);
