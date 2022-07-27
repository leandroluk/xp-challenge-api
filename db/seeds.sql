set foreign_key_checks = 0;

truncate `account`;
truncate `user`;
truncate `asset`;
truncate `asset_transaction`;
truncate `account_transaction`;

set foreign_key_checks = 1;

insert into `account` (`id`, `name`) values
  (1, 'Azul'),
  (2, 'Petrobras'),
  (3, 'Vale'),
  (4, 'John Doe'),
  (5, 'Ada Lovelace');

insert into `account_transaction` (`account_id`, `value`) values
  (4, +20000),
  (5, +30000);

insert into `user` (`account_id`, `email`, `password`) values
  (4, 'john.doe@email.com', '$2b$10$EfCv02s4ImUk7E6Z9FqBJOvzuOWVhxBpDCFWxHPk02MEOeh9Spoga'), -- 111111
  (5, 'ada.lovelace@email.com', '$2b$10$i9C5hCPTQp1Iww.TrlRB6eBiiuqMbnURHcF0GyOC/XSA3MtuOpZpS'); -- 222222

insert into `asset` (`id`, `account_id`, `code`, `value`) values
  (1, 1, 'AZUL4', 350),
  (2, 2, 'PETR4', 350),
  (3, 3, 'VALE4', 350);