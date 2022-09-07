import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { ReportController } from './controllers';
import { ReportService } from './services';
import { UserTransactionEntity } from './entities';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MikroOrmModule.forFeature([UserTransactionEntity]), AuthModule],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
